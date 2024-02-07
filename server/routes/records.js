const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


const Record = require('../models/Record.js');
//  это тоже
const ShowPaths = require('../models/ShowPaths.js');

router.get('/', async (req, res) => {
   res.json(await Record.find());
});


router.post('/', async (req, res) => {
   const record = new Record(req.body);
   await record.save();

   // ===============================

   const output = `
   <img src="../assets/logo.svg" alt="logo" class="header__logo_elem">
   <h1>Создана новая заявка на поход!</h1>
   <p>
        <ul>
       <li>Имя: ${req.body.name}</li>
       <li>email: ${req.body.email}</li>
       <li>телефон: ${req.body.address}</li>
       <li>пол: ${req.body.gender}</li>
       <li>Маршрут/консультация: ${req.body.path}</li>
     </ul>
     </p>
     `;


   //   создаю промежуточный массив, для отправки письма и пользователю и администратору
   let mailCl = String(req.body.email);
   const mailArr = [mailCl, 'samlik1993@mail.ru'];


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
      from: '"Лесной драв" <samokvalov.andy93@mail.ru>',
      to: mailArr,
      subject: `turist_project | Новая заявка`,
      text: req.body.name,
      html: output
   };
   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         return console.log(error);

         console.log('Message sent: %s',
          info.messageId);
         console.log('Preview URL: %s',
          nodemailer.getTestMessageUrl(info));
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