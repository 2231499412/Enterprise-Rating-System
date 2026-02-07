const logger = require('../utils/logger');
const { initAllData } = require('./data');

/**
 * Initialize seed/test data.
 */
const initTestData = async () => {
  try {
    logger.info('开始初始化测试数据...');

    await initAllData();

    logger.info('测试数据初始化完成');
    return true;
  } catch (error) {
    logger.error(`测试数据初始化失败: ${error.message}`);
    return false;
  }
};

if (require.main === module) {
  initTestData()
    .then((success) => {
      if (success) {
        logger.info('测试数据初始化脚本执行成功');
        process.exit(0);
      } else {
        logger.error('测试数据初始化脚本执行失败');
        process.exit(1);
      }
    })
    .catch((err) => {
      logger.error(`测试数据初始化脚本执行异常: ${err.message}`);
      process.exit(1);
    });
}

module.exports = { initTestData };
