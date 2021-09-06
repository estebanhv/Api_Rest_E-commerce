/** Dto */

const productDto = require("../../model/dto/product.dto")

const config = require("config")
/** Helper */
const helper = require("../helpers/general.helper")
const notHelper = require("../helpers/notification.helper")

exports.createProduct = (req, res, next) => {
    let prd = {
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        discount: req.body.discount,
        brand: req.body.brand,
        category: req.body.category
    }
    productDto.create(prd, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(201).json(
            {
                info: data
            }
        )
       
    })
}

exports.updateProduct = (req, res, next) => {
    let prd = {
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        discount: req.body.discount,
        brand: req.body.brand,
        category: req.body.category
    }
    productDto.update({ _id: req.body.id }, prd, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        return res.status(201).json(
            {
                info: data
            }
        )

    })

}
exports.getAll = (req, res, next) => {
    productDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(200).json(
            {
                info: data
            }
        )

    })

}
exports.getByCode = (req, res, next) => {
    productDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(200).json(
            {
                info: data
            }
        )

    })

}

exports.deleteProduct = (req, res, next) => {
    productDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        return res.status(204).json(
        )

    })
}