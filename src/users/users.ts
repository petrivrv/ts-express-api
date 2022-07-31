import {Router} from 'express'

const router = Router()

router.get('/:flg', async (req, res, next) => {

res.send(req.params)
  
});


export {router} 