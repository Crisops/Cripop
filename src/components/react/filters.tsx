import { useState, useCallback, useMemo } from 'react'
import { ListFilterPlus } from 'lucide-react'
import { navigate } from 'astro:transitions/client'
import type { FormSearch } from '@/utils/validate-rules-form'
import { getChangedFormFilters } from '@/utils/get-filled-properties'
import { objectToURLSearchParams } from '@/utils/object-to-url-search-params'
import { useDevice } from '@/hooks/use-device'
import { useForm } from '@/hooks/use-form'
import { createInitialFormFilters } from '@/config/initial-forms'
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '@heroui/drawer'
import Button from '@/components/shared/button'
import FormFilters from '@/components/react/form-filters'

interface FiltersProps {
  contentType: FormSearch['type']
}

const Filters = ({ contentType }: FiltersProps) => {
  const initialForm = useMemo(() => createInitialFormFilters(contentType), [contentType])
  const { handleSubmit, control, trigger, getValues, isSubmitting, errors, isDirty } = useForm<any>({
    initialForm,
  })
  const { isMobile } = useDevice()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenChange = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  const onSumit = useCallback(
    handleSubmit((data) => {
      if (!isDirty) return
      let filteredData = getChangedFormFilters(data, initialForm, contentType)
      const dateFieldName = contentType === 'movie' ? 'primary_release_date' : 'first_air_date'

      filteredData = {
        ...filteredData,
        sort_by: data.sort_by,
        with_runtime: {
          gte: parseInt(filteredData.with_runtime?.gte?.toString() ?? '0') * 60,
          lte: parseInt(filteredData.with_runtime?.lte?.toString() ?? '0') * 60,
        },
      }
      const dateField = filteredData[dateFieldName as keyof typeof filteredData]

      if (dateField && typeof dateField === 'object' && 'gte' in dateField && 'lte' in dateField) {
        filteredData[dateFieldName as keyof typeof filteredData] = {
          gte: dateField.gte?.toString() ?? '',
          lte: dateField.lte?.toString() ?? '',
        } as any

        const urlSearchParams = objectToURLSearchParams({ formData: filteredData as any })
        navigate(`${location.origin}${location.pathname}?${urlSearchParams}`)
        return
      }

      const urlSearchParams = objectToURLSearchParams({ formData: filteredData as any })
      navigate(`${location.origin}${location.pathname}?${urlSearchParams}`)
    }),
    [isDirty, contentType],
  )

  return (
    <>
      <Button
        variant="flat"
        radius="sm"
        onPress={() => handleOpenChange(true)}
        startContent={<ListFilterPlus />}
        className="text-tiny sm:text-small bg-white text-black"
      >
        Filtrar
      </Button>
      <Drawer
        classNames={{
          base: ['bg-black/90 backdrop-blur-sm border-l-1 border-l-foreground-800'],
          closeButton: ['end-3 hover:bg-default-100/20 transition-colors hover:text-white'],
        }}
        radius="sm"
        placement="right"
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        size={isMobile ? 'xs' : 'sm'}
      >
        <DrawerContent>
          <>
            <DrawerHeader className="end-3 flex flex-col gap-1 text-balance text-white">
              Encuentra tu contenido favorito
            </DrawerHeader>
            <DrawerBody>
              <FormFilters
                onSubmit={onSumit}
                control={control}
                trigger={trigger}
                getValues={getValues}
                contentType={contentType}
              />
            </DrawerBody>
            <DrawerFooter>
              <Button variant="solid" className="bg-transparent text-white" onPress={() => handleOpenChange(false)}>
                Cerrar
              </Button>
              <Button
                isDisabled={Object.keys(errors).length > 0 || !isDirty}
                isLoading={isSubmitting}
                type="submit"
                form="form-filters"
                variant="solid"
                className="bg-white text-black"
              >
                Enviar
              </Button>
            </DrawerFooter>
          </>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Filters
