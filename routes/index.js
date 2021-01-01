import routerx from 'express-promise-router'
import categoryRouter from './category'
import articleRuter from './article'
import userRouter from './user'
import personRouter from './person'
import incomeRouter from './income'
const router = routerx();

router.use('/category',categoryRouter)
router.use('/article',articleRuter)
router.use('/user',userRouter)
router.use('/person',personRouter)
router.use('/income',incomeRouter)

export default router