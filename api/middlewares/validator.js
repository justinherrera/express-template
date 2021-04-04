const { body, validationResult } = require('express-validator')
const User = require('../../models/User')

module.exports = {
    userValidationRules: _ => {
        return [

            // name must be provided
            body('name').toLowerCase().trim().custom((value) => {
                if(value === undefined || value === '') {
                    throw new Error('Please provide a name')
                }

                return true
            }),

            // email must be a valid email
            body('email').toLowerCase()
                .isEmail()
                .withMessage('Please provide a valid email')
                .normalizeEmail().custom(async value => {
                await User.findOne({ email: value }).then(user => {
                    if (user) return Promise.reject('Email is already in use')
                })
            }),

            // password must be at least 8 chars long
            body('password').isLength({ min: 8 })
            .withMessage('Password must be at least 8 characters long'),
            

            // passwords must match && must provided
            body('passwordConfirm').custom((value, { req }) => {
                if(value === undefined || value === '') {
                    throw new Error('Please confirm password')
                }
                else if(value !== req.body.password) {
                    throw new Error('Passwords do not match')
                }

                return true;
            })
          ]
    },

    validate: (req, res, next) => {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
          return next()
        }
        const extractedErrors = []
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
      
        return res.status(422).json({
          success: "false",
          errors: extractedErrors,
        })
    }
}
