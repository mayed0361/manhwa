import Document, {Html, Head, Main, NextScript} from 'next/document'

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang='ar' dir='rtl'>
                <Head title='Untitled'/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default CustomDocument