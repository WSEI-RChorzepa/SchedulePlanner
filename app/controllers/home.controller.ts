import { Request, Response } from 'express';

const home = async (req: Request, res: Response) => {
  res.render('home', {
    active: {
      home: true,
      about: false,
      contact: false,
    },
  });
};

const about = async (req: Request, res: Response) => {
  res.render('about', {
    active: {
      home: false,
      about: true,
      contact: false,
    },
  });
};

const contact = async (req: Request, res: Response) => {
  res.render('contact', {
    active: {
      home: false,
      about: false,
      contact: true,
    },
  });
};

export { home, about, contact };
