import {
  validateDateField,
  validateRulesFormFilters,
  validateRuntimeField,
  type FormFiltersOptions,
  type FormSearch,
} from '@/utils/validate-rules-form'
import { Controller, type Control, type UseFormGetValues, type UseFormTrigger } from 'react-hook-form'
import { getLocalTimeZone, today } from '@internationalized/date'
import { Divider } from '@heroui/divider'
import { genres, languages, sortBy } from '@/types/filter-options'
import DatePicker from '@/components/react/date-picker'
import NumberInput from '@/components/react/number-input'
import Select from '@/components/react/select'
import RadioInput from '@/components/react/radio-input'

interface FormFiltersProps {
  control: Control<FormFiltersOptions>
  trigger: UseFormTrigger<FormFiltersOptions>
  getValues: UseFormGetValues<FormFiltersOptions>
  onSubmit: () => void
  contentType: FormSearch['type']
}

const FormFilters = ({ onSubmit, control, trigger, getValues, contentType }: FormFiltersProps) => {
  const dateFieldName = contentType === 'movie' ? 'primary_release_date' : 'first_air_date'
  return (
    <form id="form-filters" onSubmit={onSubmit}>
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="w-full space-y-2">
          <p className="text-small text-white">Elije un intervalo de fechas</p>
          <div className="flex w-full flex-wrap gap-2 lg:flex-nowrap">
            <Controller
              name={`${dateFieldName}.gte` as any}
              control={control}
              rules={{
                validate: (value) => validateDateField(value, 'gte', getValues(), contentType),
              }}
              render={({ field: { value, onChange, ...field }, fieldState }) => (
                <DatePicker
                  {...field}
                  label="Fecha de inicio"
                  defaultValue={today(getLocalTimeZone()).subtract({ days: 1 }) as any}
                  description="Este campo es opcional"
                  isInvalid={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                  onChange={(e) => {
                    onChange(e)
                    trigger(`${dateFieldName}.lte` as any)
                  }}
                />
              )}
            />
            <Controller
              name={`${dateFieldName}.lte` as any}
              control={control}
              rules={{
                validate: (value) => validateDateField(value, 'lte', getValues(), contentType),
              }}
              render={({ field: { value, onChange, ...field }, fieldState }) => (
                <DatePicker
                  {...field}
                  defaultValue={today(getLocalTimeZone()).add({ days: 1 }) as any}
                  maxValue={today(getLocalTimeZone()) as any}
                  label="Fecha de fin"
                  description="Este campo es opcional"
                  isInvalid={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                  onChange={(e) => {
                    onChange(e)
                    trigger(`${dateFieldName}.gte` as any)
                  }}
                />
              )}
            />
          </div>
        </div>
        <Divider className="bg-default-100/15" />
        <div className="w-full space-y-2">
          <p className="text-small text-white">Duración máxima en horas</p>
          <div className="flex w-full flex-wrap gap-2 lg:flex-nowrap">
            <Controller
              name="with_runtime.gte"
              control={control}
              rules={{
                validate: (value) => validateRuntimeField(value, 'gte', getValues()),
              }}
              render={({ field: { onChange, ...field }, fieldState }) => (
                <NumberInput
                  {...field}
                  size="sm"
                  label="Mínimo"
                  isInvalid={!!fieldState.error}
                  formatOptions={{
                    style: 'unit',
                    unit: 'hour',
                    unitDisplay: 'short',
                  }}
                  errorMessage={fieldState.error?.message}
                  onChange={(e) => {
                    onChange(e)
                    trigger('with_runtime.lte')
                  }}
                />
              )}
            />
            <Controller
              name="with_runtime.lte"
              control={control}
              rules={{
                validate: (value) => validateRuntimeField(value, 'lte', getValues()),
              }}
              render={({ field: { onChange, ...field }, fieldState }) => (
                <NumberInput
                  {...field}
                  size="sm"
                  label="Máximo"
                  formatOptions={{
                    style: 'unit',
                    unit: 'hour',
                    unitDisplay: 'short',
                  }}
                  isInvalid={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                  onChange={(e) => {
                    onChange(e)
                    trigger('with_runtime.gte')
                  }}
                />
              )}
            />
          </div>
        </div>
        <Divider className="bg-default-100/15" />
        <div className="flex w-full flex-wrap gap-2 lg:flex-nowrap lg:justify-between">
          <Controller
            name="with_original_language"
            control={control}
            rules={{
              validate: validateRulesFormFilters.with_original_language.validate,
            }}
            render={({ field, fieldState }) => (
              <Select
                {...field}
                selectionMode="single"
                items={languages}
                label="Idioma"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="with_genres"
            control={control}
            rules={{
              validate: validateRulesFormFilters.with_genres.validate,
            }}
            render={({ field, fieldState }) => (
              <Select
                {...field}
                selectionMode="multiple"
                items={genres}
                label="Género"
                onSelectionChange={(keys) => {
                  field.onChange([...keys])
                }}
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
        </div>
        <Divider className="bg-default-100/15" />
        <div className="w-full space-y-2">
          <div>
            <p className="text-small text-white">Ordenar por</p>
            <span className="text-tiny text-neutral-500">Estos campos son opcionales</span>
          </div>
          <div className="flex w-full">
            <Controller
              name="sort_by"
              control={control}
              rules={{
                validate: validateRulesFormFilters.sort_by.validate,
              }}
              render={({ field, fieldState }) => (
                <RadioInput
                  {...field}
                  items={sortBy}
                  orientation="horizontal"
                  isInvalid={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                  radioClassNames={{
                    base: 'text-neutral-700 px-2 py-3 bg-zinc-700 rounded-small max-w-full w-full m-0',
                    label:
                      'text-neutral-500 group-data-[selected=true]:text-white group-data-[hover=true]:text-neutral-300 text-small',
                    wrapper: 'group-data-[selected=true]:border-white border-zinc-500',
                    control: 'bg-white',
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormFilters
