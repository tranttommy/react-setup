import { Router, Request, Response } from 'express'

export default Router()
  .get('/', (req: Request, res: Response) => res.send({ message: 'Sup' }))
  .get('/hello', (req: Request, res: Response) => res.send({ hello: 'world' }))
