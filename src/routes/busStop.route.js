import { Router } from 'express';

import controllers from '../controllers/busStop.controllers';
import {
  busStopUpdateInput, busStopInput
} from '../middleware/busStop.validation';

import { verifyAdminToken } from '../middleware/verifyAuthToken';

const router = Router();

router.get('/api', (req, res) => res.send('Welcome to my app'));

router.post('/busstop', [verifyAdminToken, busStopInput],
  controllers.createBusStop);

router.get('/busstop', [verifyAdminToken], controllers.getAllBusStops);

router.get('/busstop/:id', [verifyAdminToken], controllers.getBusStopById);

router.patch('/busstop/:id', [verifyAdminToken, busStopUpdateInput],
  controllers.updateBusStop);

router.delete('/busstop/:id', [verifyAdminToken], controllers.deleteBusStop);

module.exports = router;
