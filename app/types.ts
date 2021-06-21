import { Request, Response } from 'express';

export namespace Controller {
  export interface IController {
    view: (req: Request, res: Response) => void;
  }

  export interface IViewConfiguration {
    title: string;
    layout: 'main' | 'auth';
    styles: string;
  }
}
