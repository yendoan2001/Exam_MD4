import Staff from "../models/staff.model";
import Branch from "../models/branch.model";

class StaffController {
    async index(req, res, next) {
        try {
            const staffs = await Staff.find().populate('branch').sort({age:1});
            const branches = await Branch.find();
            res.render('admin/staffs/list', {data: {staffs,branches}});
        } catch (e) {
            next(e);
        }
    }

    async showCreateForm(req, res, next) {
        try {
            let branches = await Branch.find();
            res.render('admin/staffs/add', {data: branches})
        } catch (e) {
            next(e);
        }
    }

    async store(req, res, next) {
        try {
            console.log(req.body)
            await Staff.create({
                code: req.body.code,
                name: req.body.name,
                salary: req.body.salary,
                age: req.body.age,
                branch: req.body.branch
            });
            res.redirect('/admin/staffs');
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            let id = req.params.id;
            await Staff.deleteOne({_id: id})
        } catch (e) {
            next(e)
        } finally {
            res.redirect('/admin/staffs')
        }
    }

    async showUpdateForm(req, res, next) {
        try {
            const staff = await Staff.findOne({_id: req.params.id});
            const branches = await Branch.find();
            if (staff) {
                res.render("admin/staffs/update", {data: {staff: staff, branches: branches}});
            } else {
                res.render('error')
            }
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const staff = await Staff.findOne({_id: req.params.id});
            staff.code = req.body.code;
            staff.name = req.body.name;
            staff.salary = req.body.salary;
            staff.branch = req.body.branch;
            staff.age = req.body.age;
            await staff.save();
            if (staff) {
                res.redirect("/admin/staffs");
            } else {
                res.render("error");
            }
        } catch (e) {
            next(e);
        }
    }

    async showStaffDetails(req, res, next) {
        try {
            const staff = await Staff.findOne({_id: req.params.id}).populate('branch');
            const branches = await Branch.find();
            res.render('admin/staffs/detail',{data: {staff: staff, branches: branches}});
        } catch (err) {
            res.render(err)
        }
    }
    async filterByBranches(req,res){
        const branchId = req.query.branchId;
        let query = {};
        if (branchId !== 'All branches') {
            query = {
                branch: branchId
            }
        }
        const staffs = await Staff.find(query).populate('branch');
        res.status(200).json(staffs);
    }
}

export default StaffController
