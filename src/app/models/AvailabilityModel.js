import { InpersionModel } from "./InpersionModel";
import { OncallModel } from "./OncallModel";
import { VideoData } from "./VideoData";

export const AvailabilityModel = {
    //id:"0",
    name: "availablity",
    inperson: InpersionModel,
    oncall:OncallModel,
    video: [],
    site_id: "0",
    workspace_id: "0",
    is_deleted: false
}