import nextConnect from 'next-connect';
import models from '../../../models';

// const models = require('../../../models/index');
// const caller = require('../../../modules/caller');

const handler = nextConnect()
  // Get method
  .get(async (req, res) => {
      console.log('££££££££££££££££££££33££££');
      console.log(models);
      console.log(models.callers);
      console.log('££££££££££££££££££££33££££');


    const {
      method,
      body,
    } = req;

    const callers = await models.caller.findAll();

    res.statusCode = 200;
    res.json({
      status: 'success',
      data: models,
      total: callers,
    });
  });

export default handler;