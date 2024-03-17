import * as yup from 'yup'


export const contactSchemas = yup.object().shape({
   email: yup.string().min(1, 'Veuillez entrer une adresse e-mail valide').email('Veuillez entrer une adresse e-mail valide').typeError('Veuillez entrer une adresse e-mail valide'),
   message: yup.string().min(10, 'Le message est trop court (min 10 caractères)').max(255, 'Le messages est trop long (max 255 caractères)').typeError('Veuillez entrer un message valide')
})