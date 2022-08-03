import express, { Router } from 'express';
// Import other route files here
import bookRouter from './books';
import salesOrderRouter from './salesOrders';

const router: Router = express.Router();
// Define route here
router.use('/book', bookRouter);
router.use('/sales-order', salesOrderRouter);

export default router;
