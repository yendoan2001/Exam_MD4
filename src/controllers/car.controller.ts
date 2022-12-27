import Car from "../models/car.model";
import Brand from "../models/brand.model";
class CarController {
    async index(req, res, next) {
        try {
            const cars = await Car.find().populate('brand');
            res.render('admin/cars/list', {cars: cars});
        } catch (e) {
            next(e);
        }
    }

    async showCreateForm(req, res, next) {
        console.log(req.body);
        try {
            let brands = await Brand.find();
            res.render('admin/cars/add', {data: brands})
        } catch (e) {
            next(e);
        }
    }

    async store(req, res, next) {
        try {
            await Car.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                brand: req.body.brand
            });
            console.log(req.body);
            res.redirect('/admin/products');
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            let id = req.params.id;
            await Car.deleteOne({_id: id})
        } catch (e) {
            next(e)
        } finally {
            res.redirect('/admin/products')
        }
    }

    async showUpdateForm(req, res, next) {
        try {
            const car = await Car.findOne({_id: req.params.id});
            const brands = await Brand.find();
            if (car) {
                res.render("admin/cars/update", {data: {car, brands}});
            } else {
                res.render('error')
            }
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const car = await Car.findOne({_id: req.params.id});
            car.name = req.body.name;
            car.description = req.body.description;
            car.brand = req.body.brand;
            car.price = req.body.price;
            await car.save();
            if (car) {
                res.redirect("/admin/products");
            } else {
                res.render("error");
            }
        } catch (e) {
            next(e);
        }
    }

    async showCarDetails(req, res, next) {
        try {
            const car = await Car.findOne({_id: req.params.id}).populate('brand');
            const brands = await Brand.find();
            res.render('admin/cars/detail',{data: {car, brands}});
        } catch (err) {
            res.render(err)
        }
    }
}

export default CarController
