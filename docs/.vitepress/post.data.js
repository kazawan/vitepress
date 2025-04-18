import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/**/*.md', {
    includeSrc: true, // 包含原始 markdown 源?
    render: true,     // 包含渲染的整页 HTML?
    excerpt: true,    // 包含摘录?
    transform(rawData) {
        // 根据需要对原始数据进行 map、sort 或 filter
        // 最终的结果是将发送给客户端的内容
       

        return rawData.map((item) => {
            // 处理每个文件的内容
            // console.log(item)
            const { title, date, tag, src,des ,img} = item.frontmatter
            const { url } = item
            const catalog = item.url.split('/').slice(2, -1).join('/')
            return {
                title,
                date,
                tag,
                src,
                url,
                des,
                img,
                catalog,
                
            }
        })
    }
})