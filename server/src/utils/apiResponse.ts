import { Response } from "express";

export const sendSuccess = (res: Response, data: any) => {
  res.status(200).json({
    success: true,
    data,
  });
};

export const sendError = (
  res: Response,
  data: any,
  message: string,
  code = 500
) => {
  res.status(code).json({
    success: false,
    data,
    message,
  });
};
