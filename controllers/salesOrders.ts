import { Request, Response } from 'express';
import randomstring from 'randomstring';
import Book from '../models/book';
import SalesOrder from '../models/salesOrder';

export const createSalesOrder = async (req: Request, res: Response) => {
    try {
        //* Code goes here

        return res.status(201).json({
            message: 'Order placed successfully!',
            transactionId,
            totalOrderAmount,
        });
    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const getSalesOrders = async (req: Request, res: Response) => {
    const { transactionId } = req.query;
    const filter = transactionId ? { transactionId } : {};
    try {
        const salesOrders = await SalesOrder.find(filter, { _id: 0 }).populate(
            'items.item',
            '-_id -createdAt -updatedAt -price -authors'
        );
        if (salesOrders.length === 0) {
            return res.status(404).send({
                message: 'No sales orders found!',
            });
        }
        return res.status(200).json({ salesOrders });
    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({ error: error.message });
    }
};
