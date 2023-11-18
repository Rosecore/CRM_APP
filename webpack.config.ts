import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'


export default () => {
    const config: webpack.Configuration | webpack.WebpackOptionsNormalized = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        mode: "development",
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Development',
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
        ],
        
        devtool: 'inline-source-map',
        devServer:{
            port: 8000,
            open: true,
            historyApiFallback: true,
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                        },
                        'sass-loader'
                    ]
                }

            ],

        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            preferAbsolute: true,
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            mainFiles: ["index"]
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
    }
    return config
}