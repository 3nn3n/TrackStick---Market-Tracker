import React from 'react'
import { Controller } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SelectField: React.FC<SelectFieldProps> = ({ name, label, placeholder, options, control, error, required = "false" }) => {
  return (
    <div className='space-y-2'>
      <label htmlFor={name} className='form-label'>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? `Please select a ${label.toLowerCase()}` : false }}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="select-trigger">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className='bg-gray-800 text-white border-gray-600'>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value} className='focus:bg-gray-600 focus:text-white'>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

        )}
      />
      {error && <p>{error.message}</p>}
    </div>
  )
}

export default SelectField