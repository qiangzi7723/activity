export default {
    // 解析URL链接上的参数
    reload() {
        const href = window.location.href;
        const arrs = href.split('?')[1].split('&');
        const data: any = {};
        arrs.forEach((value, index) => {
            const kv = value.split('=');
            data[kv[0]] = kv[1];
        });
        console.log(data);
        window._query = {
            ...data
        }
        return data;
    }
}