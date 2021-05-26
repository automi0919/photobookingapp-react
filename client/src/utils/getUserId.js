
export default {
    getUserId: function (pathname) {

        const userId = pathname.substring(pathname.lastIndexOf('/') + 1);

        return userId;
    },

}