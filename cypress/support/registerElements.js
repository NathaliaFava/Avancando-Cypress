const registerElements = {
    register: {
        fanClubName: ':nth-child(1) > #billing_first_name_field > #billing_first_name',
        presidentsName: ':nth-child(2) > #billing_first_name_field > #billing_first_name',
        fanClubEmail: ':nth-child(3) > #billing_email_field > #billing_email',
        emailConfirmation: ':nth-child(4) > #billing_email_field > #billing_email',
        telephone: '#billing_phone',
        password: '#billing_password',
        passwordConfirmation: '#billing_password2',
        termsOfConditions: 'label > input',
        btn_registerFanClub: '.color1',
        alerts: '.alert'
    }
}

export default registerElements