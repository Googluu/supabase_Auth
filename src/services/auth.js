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

export const signInWithEmail = async (data) => {
    let result;
    try {
        result = await supabase.auth.signIn(data)
        return result
    } catch (error) {
        console.error(error)
    }
    return result
}

// export const signInWithMagicLink = async (email) => {
//     let result;
//     try {
//         result = await supabase.auth.signIn({email})
//         return result
//     } catch (error) {
//         console.error(error)
//     }
//     return result
// }

export const signInWithGithub = async () => {
    try {
        const { user, error } = await supabase.auth.signIn({
            provider: 'github',
          })
          if(error) throw new Error('Un error ocurrido durante la autenticación')
          return user
    } catch (error) {
        console.error(error)
    }
}

export const getUserProfile = async () => {
    try {
        const user = supabase.auth.user()
        if(user) {
            const { id, app_metadata, user_metadata } = user
            if(app_metadata.providers.includes('github')){
                const { full_name } = user_metadata
                return { username: full_name }
            }

            const { data, error, status } = await supabase 
                .from('profiles')
                .select('id, full_name, updated_at')
                .eq('id', id)
                .single()

                if(error && status === 406) throw new Error('Ups! Un error ha ocurrido')

                return { username: data.full_name }
        }
    } catch (error) {
        console.error(error)
    }
}

export const logout = async () => {
    await supabase.auth.signOut()
}