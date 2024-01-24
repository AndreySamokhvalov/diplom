const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


const Record = require('../models/Record.js');

router.get('/', async (req, res) => {
   res.json(await Record.find());
});

router.post('/', async (req, res) => {
   const record = new Record(req.body);
   await record.save();

   // ===============================

   const output = `
   <h1>Новая заявка на поход!</h1>
   <p>
        <ul>
       <li>name: ${req.body.name}</li>
       <li>email: ${req.body.email}</li>
       <li>address: ${req.body.address}</li>
       <li>gender: ${req.body.gender}</li>
       <li>path: ${req.body.path}</li>
     </ul>
     </p>
     `;

   let transporter = nodemailer.createTransport({
      
      host: 'smtp.mail.ru',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
         user: 'samokvalov.andy93@mail.ru',
         pass: 'sYQtW7H9V2TM3Jf8njd3'
      }

   });

   let mailOptions = {
      from: '"turist_project" <samokvalov.andy93@mail.ru>',
      to: 'samlik1993@mail.ru',
      subject: `turist_project | Новая заявка`,
      text: req.body.name,
      html: output
   };
   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         return console.log(error);

         console.log('Message sent: %s', info.messageId);
         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      }
   })

   // ===============================


   res.json({ state: 'success' });
});

router.get('/:id', async (req, res) => {
   res.json(await Record.findById(req.params.id));
});

router.put('/:id', async (req, res) => {
   await Record.findByIdAndUpdate(req.params.id, req.body);
   res.json({ state: 'updated' });
});

router.delete('/:id', async (req, res) => {
   await Record.findByIdAndRemove(req.params.id);
   res.json({ state: 'deleted' });
});

module.exports = router;