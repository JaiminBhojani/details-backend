const express = require('express');
const router = express.Router();
const cors = require("cors");
const Submit = require("../models/Submit")

router.use(express.json());
router.use(cors());

router.get('/fetchalldetail', async (req,res)=>{
    try {
        const product = await Submit.find()
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

router.post('/adddetail', async(req,res)=>{
    try {
        const {name, phone, email,hobby } = req.body;
        const pr = new Submit({name, phone, email,hobby })
        pr.save()
        res.json(pr);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

router.put('/deletedetail/:id', async (req, res) => {
    try {
        let note = await Submit.findById(req.params.id);
        // console.log(note)
        if (!note) { return res.status(404).send('Not Found') }
        // if (!note) { return res.json(req.params.id) }

        // if (note.user.toString() !== req.user.id) {
        //     return res.status(401).send('Not Allowed')
        // }

        note = await Submit.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }

})

router.put('/updatedetail/:id',async (req, res) => {
    try {


        const {name, phone, email,hobby } = req.body;
        const newnote = {};
        if (name) { newnote.name = name };
        if (phone) { newnote.phone = phone };
        if (email) { newnote.email = email };
        if(hobby){newnote.hobby = hobby};

        let note = await Submit.findById(req.params.id);
        // console.log(note)
        if (!note) { return res.status(404).send(' Found') }

        // if (note.user.toString() !== req.user.id) {
        //     return res.status(401).send('Not Allowed')
        // }

        note = await Submit.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true })
        // console.log(note)
        res.json({ note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router ;