import routesConfig from './routes.config';
import webpackConfig from './webpack.config';
import proxyConfig from './proxy.config';

export default Object.assign({
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            hardSource: true,
            title: {
                defaultTitle: '请自行设置默认标题',
                separator: '-'
            },
            dva: {
                immer: true
            },
            dynamicImport: {
                webpackChunkName: true
            }
        }]
    ]
}, routesConfig, webpackConfig, proxyConfig);