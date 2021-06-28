// ./src/azure-storage-blob.ts

// <snippet_package>
// THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient} from '@azure/storage-blob';
// THIS IS SAMPLE CODE ONLY - DON'T STORE TOKEN IN PRODUCTION CODE
const sasToken = process.env.AZURE_STORAGE_NAME || "?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2025-06-23T16:02:37Z&st=2021-06-23T08:02:37Z&spr=https&sig=6uavIoxwDjzfdKyCKZb6w6XBUOyRvTB6QdbZn1jQeRY%3D"; // Fill string with your SAS token
const containerName = `hmis`;
const storageAccountName = process.env.STORAGE_SAS_TOKEN || "hmis"; // Fill string with your Storage resource name
// </snippet_package>

// <snippet_isStorageConfigured>
// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}

export const azureBaseURL = () => {
  return `https://${storageAccountName}.blob.core.windows.net/${containerName}/`;
}

export const toImageUrl = pathname => `https://${storageAccountName}.blob.core.windows.net/${containerName}/` + pathname;
// </snippet_isStorageConfigured>

// <snippet_getBlobsInContainer>
// return list of blobs in container to display
const getBlobsInContainer = async (containerClient) => {
  const returnedBlobUrls = [];

  // get list of blobs in container
  // eslint-disable-next-line
  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
}
// </snippet_getBlobsInContainer>

// <snippet_createBlobInContainer>
const createBlobInContainer = async (containerClient, file) => {
  
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // upload file
  await blobClient.uploadBrowserData(file, options);
}
// </snippet_createBlobInContainer>

// <snippet_uploadFileToBlob>
const uploadFileToBlob = async (file) => {
  if (!file) return [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  // get Container - full public read access
  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: 'container',
  });

  // upload file
  await createBlobInContainer(containerClient, file);

  // get list of blobs in container
  return getBlobsInContainer(containerClient);
};

// </snippet_uploadFileToBlob>

// <snippet_uploadFileToBlob>
export const uploadFileToBlobWithSite = async (file,user_id,image_name) => {
  if (!file) return [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  // get Container - full public read access
  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: 'container',
  });

  const site_id=localStorage.getItem("site_id");
  const workspace_id=localStorage.getItem("workspace_id");

  const URL=site_id+"/"+workspace_id+"/"+user_id+"/"+image_name;

  // upload file
  await createBlobInContainerSite(containerClient,file,URL);

  // get list of blobs in container
  return URL;//getBlobsInContainer(containerClient);
};

// <snippet_createBlobInContainer>
const createBlobInContainerSite = async (containerClient,file,upload_url) => {
  
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(upload_url);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: "image/png" } };

  // upload file
  await blobClient.uploadBrowserData(file, options);
}

export default uploadFileToBlob;

