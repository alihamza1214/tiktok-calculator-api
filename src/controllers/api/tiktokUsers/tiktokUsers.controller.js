import TikTokAPI, {getRequestParams} from "tiktok-api";
require('../../../../global');
// Required - a method that signs the URL with anti-spam parameters
// You must provide an implementation yourself to successfully make
// most requests with this library.

const signURL = async (url, ts, deviceId) => {
    const as = 'anti-spam parameter 1';
    const cp = 'anti-spam parameter 2'
    const mas = 'anti-spam parameter 3';
    return `${url}&as=${as}&cp=${cp}&mas=${mas}`;
};
// Required - device parameters
// You need to source these using a man-in-the-middle proxy such as mitmproxy,
// CharlesProxy or PacketCapture (Android)
const params = getRequestParams({
    device_id: config.device_id,
    fp: config.fp,
    iid: config.iid,
    openudid: config.openudid,
});
const api = new TikTokAPI(params, { signURL });

module.exports = {
    get: async (req, res) => {
        //return helpers.apiRequest.get(Products,req,res);
        res.send({"message":"success"});
    },
    find: async (req, res) => {
       // return helpers.apiRequest.find(Products,req,res);
    },
    post: async (req, res) => {
      /*  const post =  require('./methods/post.method');
       return  post(Products,req,res);*/
    },
    put: async (req, res) => {
      /*  const put =  require('./methods/put.method');
        return put(Products,req,res);*/
    },
    delete: async (req, res) => {
       /* const users = await User.find({});
        res.send(users)*/
    }
    ,
    getUser:async (req, res) => {
        let resp=await new Promise(async (resolve,reject)=>{
            if(!req.params.id){
                res.send({"status":"failed","data":"","message":"Username Missing"});
            }
            var result= await api.searchUsers({
                keyword: req.params.id,
                count: 1,
                cursor: 0,
            });
            resolve(result);
        });
        if(resp.data.user_list.length > 0){
            let output_response={
                "status":resp.data.user_list[0].user_info.status,
                "nickName":resp.data.user_list[0].user_info.nickname,
                "profile_picture":resp.data.user_list[0].user_info.avatar_medium.url_list[0],
                "subscribers":resp.data.user_list[0].user_info.follower_count,
                "hearts":resp.data.user_list[0].user_info.total_favorited,
                "posts":resp.data.user_list[0].user_info.aweme_count,
                "completedata":resp.data.user_list[0].user_info,

            };
            res.send({"status":"success","data":output_response,"message":"User found"});
        }else{
            res.send({"status":"success","data":"","message":"No User found"});
        }
    },
    getUsers:async (req, res) => {
        let resp=await new Promise(async (resolve,reject)=>{
            console.log(req.query);
            let page=1;
            let limit=30;
            if(req.query.page_no){
                page=req.query.page_no;
            }
            let cursor=(page*limit)-limit;
            if(!req.params.keyword){
                res.send({"status":"failed","data":"","message":"Username Missing"});
            }
            var result= await api.searchUsers({
                keyword: req.params.keyword,
                count: 30,
                cursor: cursor,
            });
            resolve(result);
        });
        if(resp.data.user_list.length > 0){
            let data={"records":resp.data,"count":resp.data.user_list.length}
            res.send({"status":"success","data":data,"has_more_records":resp.data.has_more,"message":"Users found"});
        }else{
            res.send({"status":"success","data":"","message":"No User found"});
        }
    },
    getUserListing:async (req, res) => {
        const api = new TikTokAPI(params, { signURL });
        let resp=await new Promise(async (resolve,reject)=>{

              var result= await api.listFollowing({
                 user_id: req.params.user_id,
                 max_time: Math.floor(new Date().getTime() / 1000),
               });
            /* var result = await api.listPosts({
               user_id: '287318696102883328',
               max_cursor: 0,
             });
             console.log(result);*/

            resolve(result);
        });

        res.send({'data':resp.data});



    },
    getUserPosts:async (req, res) => {
        const api = new TikTokAPI(params, { signURL });
        let resp=await new Promise(async (resolve,reject)=>{

              var result= await api.listPosts({
                 user_id: req.params.user_id,
                  max_cursor: 0,
               });
              console.log(result);
            /* var result = await api.listPosts({
               user_id: '287318696102883328',
               max_cursor: 0,
             });
             console.log(result);*/

            resolve(result);
        });

        res.send({'data':resp.data});



    },
    userLogin:async (req, res) => {
        const api = new TikTokAPI(params, { signURL });
        let resp=await new Promise(async (resolve,reject)=>{
            var result=await api.loginWithEmail('hamzahamzii@gmail.com','tiktok123');
            resolve(result);
        });
        console.log(resp);
        res.send({'data':resp.data});
    },
};
