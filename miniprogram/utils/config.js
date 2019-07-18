/**
 * 打赏二维码
 */
var moneyUrl ="https://img2018.cnblogs.com/blog/1530506/201907/1530506-20190717105448082-1425057941.png"

/**
 * 公众号二维码
 */
var wechatUrl ="https://img2018.cnblogs.com/blog/1530506/201907/1530506-20190717104534005-1839641656.jpg"

/**
 * 云开发环境
 */
var env ="micasnaker"
/**
 * 个人文章操作枚举
 */
var postRelatedType = {
    COLLECTION: 1,
    ZAN: 2,
    properties: {
        1: {
            desc: "收藏"
        },
        2: {
            desc: "点赞"
        }
    }
};

module.exports = {
    postRelatedType: postRelatedType,
    moneyUrl:moneyUrl,
    wechatUrl:wechatUrl,
    env:env
}