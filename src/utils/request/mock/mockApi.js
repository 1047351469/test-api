import axiosInstance from "../index.js"
import MockAdapter from 'axios-mock-adapter';
// 创建 MockAdapter 实例
const mock = new MockAdapter(axiosInstance, { delayResponse: 200 });

/**
 * 统一管理请求模拟
 * @param {object} options 模拟选项
 *   - {string} path 请求路径
 *   - {string} [method='POST'] 请求方法
 *   - {number} [status=200] 响应状态码
 *   - {object} [response={}] 响应数据
 *   - {boolean} [timeout=false] 是否模拟超时
 *   - {function} [condition=null] 条件函数
 *   - {object} [expectedRequest=null] 模拟请求体验证
 *   - {object} [expectedHeaders=null] 模拟请求头验证
 */
function mockRequest({
    path,
    method = 'POST',
    status = 200,
    response = {},
    timeout = false,
    condition = null,
    expectedRequest = null,
    expectedHeaders = null,
}) {
    const mockMethod = mock[`on${method.toUpperCase()}`](path);

    if (timeout) {
        // 模拟超时
        mockMethod.timeout();
    } else if (condition || expectedRequest || expectedHeaders) {
        // 模拟条件响应或请求验证
        mockMethod.reply(config => {
            // 验证请求体
            if (expectedRequest && JSON.stringify(config.data) !== JSON.stringify(expectedRequest)) {
                return [400, { error: 'Invalid request body' }];
            }

            // 验证请求头
            if (expectedHeaders) {
                const headersMatch = Object.keys(expectedHeaders).every(
                    key => config.headers[key] === expectedHeaders[key]
                );
                if (!headersMatch) {
                    return [400, { error: 'Invalid request headers' }];
                }
            }

            // 自定义条件
            if (condition && !condition(config)) {
                return [400, { error: 'Condition not met' }];
            }

            return [status, response];
        });
    } else {
        // 默认响应
        mockMethod.reply(status, response);
    }
}






