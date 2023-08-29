'use client'

import { useCallback, useState } from "react";
import { FieldValues, useForm} from 'react-hook-form';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(()=>{
    variant === 'LOGIN' ? setVariant('REGISTER') : setVariant('LOGIN');
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues:{
      name: '',
      email: '',
      password: ''
    }
  });

  return (
    <div>AuthForm</div>
  );
}

export default AuthForm;