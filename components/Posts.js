import Post from "./Post"

const DUMMY_DATA = [
    {
        id: '123',
        username: 'rrezvani01',
        userImg: 'https://www.google.com/search?q=romtin+rezvani&rlz=1C5CHFA_enUS964US964&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiZo6DbiLf9AhVJEUQIHThACM4Q0pQJegQIAxAC&biw=1440&bih=789&dpr=2#imgrc=CwijfdhBw_eywM',
        img: 'https://www.google.com/search?q=romtin+rezvani&rlz=1C5CHFA_enUS964US964&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiZo6DbiLf9AhVJEUQIHThACM4Q0pQJegQIAxAC&biw=1440&bih=789&dpr=2#imgrc=CwijfdhBw_eywM',
        caption: 'This is dope'
    },
    {
        id: '456',
        username: 'kitokazu',
        userImg: 'https://www.google.com/search?q=whales&rlz=1C5CHFA_enUS964US964&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjt04yRibf9AhXoPEQIHTBMB7UQ0pQJegQIBhAC&biw=1440&bih=789&dpr=2#imgrc=L56WehN70Jl7BM',
        img: 'https://www.google.com/search?q=whales&rlz=1C5CHFA_enUS964US964&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjt04yRibf9AhXoPEQIHTBMB7UQ0pQJegQIBhAC&biw=1440&bih=789&dpr=2#imgrc=L56WehN70Jl7BM',
        caption: 'How interesting'
    },
    {
        id: '789',
        username: 'cattleLover123',
        userImg: 'https://www.google.com/search?q=cattle&tbm=isch&ved=2ahUKEwj-7IqSibf9AhXIOEQIHVR7BGkQ2-cCegQIABAA&oq=cattle&gs_lcp=CgNpbWcQAzIKCAAQgAQQsQMQCjIKCAAQgAQQsQMQCjIKCAAQgAQQsQMQCjIHCAAQgAQQCjIKCAAQgAQQsQMQCjIHCAAQgAQQCjIKCAAQgAQQsQMQCjIKCAAQgAQQsQMQCjIHCAAQgAQQCjIHCAAQgAQQCjoHCAAQsQMQQzoICAAQgAQQsQM6BQgAEIAEOgQIABBDOgsIABCABBCxAxCDAToECAAQA1CeA1j-BmDeB2gAcAB4AIABbogBwgOSAQM2LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=uFn9Y_6wC8jxkPIP1PaRyAY&bih=789&biw=1440&rlz=1C5CHFA_enUS964US964#imgrc=bfA08OHLCUGwiM',
        img: 'https://www.google.com/search?q=cattle&tbm=isch&ved=2ahUKEwj-7IqSibf9AhXIOEQIHVR7BGkQ2-cCegQIABAA&oq=cattle&gs_lcp=CgNpbWcQAzIKCAAQgAQQsQMQCjIKCAAQgAQQsQMQCjIKCAAQgAQQsQMQCjIHCAAQgAQQCjIKCAAQgAQQsQMQCjIHCAAQgAQQCjIKCAAQgAQQsQMQCjIKCAAQgAQQsQMQCjIHCAAQgAQQCjIHCAAQgAQQCjoHCAAQsQMQQzoICAAQgAQQsQM6BQgAEIAEOgQIABBDOgsIABCABBCxAxCDAToECAAQA1CeA1j-BmDeB2gAcAB4AIABbogBwgOSAQM2LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=uFn9Y_6wC8jxkPIP1PaRyAY&bih=789&biw=1440&rlz=1C5CHFA_enUS964US964#imgrc=bfA08OHLCUGwiM',
        caption: 'What an awesome day'
    },
    {
        id: '101112',
        username: 'warriorsLover123',
        userImg: 'https://www.google.com/search?q=warriors&rlz=1C5CHFA_enUS964US964&source=lnms&tbm=isch&sa=X&ved=2ahUKEwie2cW9ibf9AhWOE0QIHRsmD7AQ0pQJegQIBRAE&biw=1440&bih=789&dpr=2#imgrc=cfvM0iechpUdIM',
        img: 'https://www.google.com/search?q=warriors&rlz=1C5CHFA_enUS964US964&source=lnms&tbm=isch&sa=X&ved=2ahUKEwie2cW9ibf9AhWOE0QIHRsmD7AQ0pQJegQIBRAE&biw=1440&bih=789&dpr=2#imgrc=cfvM0iechpUdIM',
        caption: 'Coolio'
    },
]

function Posts() {
    return (
        <div>
            <Post/>
            {/* Post */ }
            {/* Post */ }
            {/* Post */ }
            {/* Post */ }
            {/* Post */ }
        </div>
    )
}

export default Posts