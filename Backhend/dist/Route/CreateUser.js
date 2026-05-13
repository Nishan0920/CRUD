import express, { Router } from "express";
import data from "../Models/User.js";
import { body, validationResult } from "express-validator";
const router = express.Router();
const noteValdiationResult = [
    body("title").isString().withMessage("Title must be string").trim(),
    body("description")
        .isString()
        .notEmpty()
        .isLength({ max: 10 })
        .withMessage("description cannot be short"),
];
router.post("/createdata", noteValdiationResult, async (req, res) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            res.status(400).json({
                success: false,
                errors: result.array(),
            });
        }
        const { title, description } = req.body;
        const newNote = await data.create({ title, description });
        res.status(200).json({
            success: true,
            message: "Data send",
            data: newNote,
        });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
router.get("/getdata", async (req, res) => {
    try {
        const allNotes = await data.find({});
        res.status(200).json({
            success: true,
            message: "Data retrieved",
            data: allNotes,
        });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
router.delete("/delete-note/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await data.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ success: false, message: "Note not found" });
        }
        res.status(200).json({ success: true, message: "Deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ success: false });
    }
});
export default router;
