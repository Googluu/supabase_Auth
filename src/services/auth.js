import { supabase } from '../api/supabaseClient'

export const signUpWithEmail = async (data) => {
    let result;
    try {
        result = await supabase.auth.signUp(data)
        return result
    } catch (error) {
        console.error(error)
    }
    return result
}

export const updateProfile = async (data) => {
    try {
        await supabase.from('profiles').upsert(data, { returning: 'minimal' })
    } catch (error) {
        console.error(error)
    }
}