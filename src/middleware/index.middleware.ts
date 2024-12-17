// Purpose: Middleware for handling errors and 404s.

import { NextFunction, Request, Response } from "express";

const NODE_ENV = process.env.NODE_ENV;

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: NODE_ENV === 'production' ? '🥞' : err.stack,
    });
}
