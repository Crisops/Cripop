import { navigate } from 'astro:transitions/client'
import { Controller } from 'react-hook-form'
import { initialFormSearch } from '@/config/initial-forms'
import { useForm } from '@/hooks/use-form'
import { validateRulesForm, type FormSearch as FormSearchType } from '@/utils/validate-rules-form'
import Button from '@/components/shared/button'
import RadioInput from '@/components/react/radio-input'
import Input from '@/components/react/input'

interface FormSearchProps {
  iconSearch: React.ReactNode
}

const FormSearch = ({ iconSearch }: FormSearchProps) => {
  const { registerField, handleSubmit, errors, isSubmitting, control } = useForm<FormSearchType>({
    initialForm: initialFormSearch,
  })

  const onSubmit = handleSubmit(async (data) => {
    const { search, type } = data
    navigate(`/result?search=${search}&type=${type}`)
  })

  return (
    <form onSubmit={onSubmit} className="relative h-full w-full">
      <div className="flex h-full w-full items-start justify-center">
        <div className="mt-10 w-2xl space-y-5">
          <Input
            {...registerField('search')}
            errorMessage={errors.search?.message}
            isInvalid={!!errors.search}
            size="lg"
            radius="sm"
            variant="underlined"
            startContent={iconSearch}
            placeholder="Buscar"
            isClearable
          />
          <Controller
            name="type"
            control={control}
            rules={{
              validate: validateRulesForm.type.validate,
            }}
            render={({ field: { onChange, value, name } }) => (
              <RadioInput
                name={name}
                value={value}
                onValueChange={onChange}
                errorMessage={errors.type?.message}
                isInvalid={!!errors.type}
                orientation="horizontal"
                items={[
                  { key: 'movie', label: 'Películas' },
                  { key: 'tv', label: 'Series' },
                ]}
                radioClassNames={{
                  base: 'text-neutral-700 w-full max-w-full grow lg:grow-0 lg:max-w-max px-3 py-2 bg-transparent border border-zinc-900 rounded-small m-0',
                  label:
                    'text-neutral-800 group-data-[selected=true]:text-white group-data-[hover=true]:text-neutral-700 text-small',
                  wrapper: 'group-data-[selected=true]:border-white border-zinc-900',
                  control: 'bg-white',
                }}
              />
            )}
          />
          <Button
            type="submit"
            isLoading={isSubmitting}
            size="md"
            radius="sm"
            className="w-full min-w-full bg-white text-black lg:w-30 lg:min-w-30"
          >
            Buscar
          </Button>
        </div>
      </div>
    </form>
  )
}

export default FormSearch
