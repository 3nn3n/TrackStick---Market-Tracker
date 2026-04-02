"use client";

import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/InputField';
import { Button } from '@/components/ui/button';
import { signInWithEmail } from '@/lib/actions/auth.action';
import router from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';


const SignIn = () => {

  const router = useRouter();

  const { register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>(
    {
      defaultValues: {
        email: '',
        password: '',
      },
      mode: 'onBlur',
    }
  );

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);
      if (result.success) router.push('/');
    } catch (error) {
      toast.error("Failed to sign in. Please try again.", {
        description: error instanceof Error ? error.message : "An unexpected error occurred.",
      });
    }
  };


  return (
    <>
      <h1 className='form-title'>Welcome Back!</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField
          name="email"
          label="Email Address"
          placeholder="harry.potter@example.com"
          register={register}
          error={errors.email}
          validation={{ required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } }}
        />
        <InputField
          name="password"
          label="Password"
          placeholder="********"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" } }}
        />
        <Button type="submit" disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>
        <FooterLink text="Don't have an account?" linkText="Sign Up" href="/sign-up" />

      </form>
    </>
  )
}

export default SignIn