"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { InputGroup, InputGroupAddon } from "@/components/ui/input-group";
import { CountryCodeSelect } from "@/components/custom/country-code-select";

const createRequestDemoSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    name: z
      .string()
      .min(1, t("RequestDemoModal.validationErrors.nameRequired")),
    workEmail: z
      .string()
      .email(t("RequestDemoModal.validationErrors.emailInvalid")),
    phoneCode: z
      .string()
      .min(1, t("RequestDemoModal.validationErrors.phoneCodeRequired")),
    phoneNumber: z
      .string()
      .min(1, t("RequestDemoModal.validationErrors.phoneNumberRequired")),
    jobTitle: z
      .string({
        error: t("RequestDemoModal.validationErrors.jobTitleRequired"),
      })
      .min(1, t("RequestDemoModal.validationErrors.jobTitleRequired")),
    industrySector: z
      .string({
        error: t("RequestDemoModal.validationErrors.industrySectorRequired"),
      })
      .min(1, t("RequestDemoModal.validationErrors.industrySectorRequired")),
    solution: z
      .string({
        error: t("RequestDemoModal.validationErrors.solutionRequired"),
      })
      .min(1, t("RequestDemoModal.validationErrors.solutionRequired")),
  });

type RequestDemoFormData = z.infer<ReturnType<typeof createRequestDemoSchema>>;

interface RequestDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RequestDemoModal({
  open,
  onOpenChange,
}: RequestDemoModalProps) {
  const t = useTranslations();
  const requestDemoSchema = createRequestDemoSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<RequestDemoFormData>({
    resolver: zodResolver(requestDemoSchema),
  });

  const [selectedPhoneCode, setSelectedPhoneCode] = React.useState("+55");
  const [selectedJobTitle, setSelectedJobTitle] = React.useState("");
  const [selectedIndustrySector, setSelectedIndustrySector] =
    React.useState("");
  const [selectedSolution, setSelectedSolution] = React.useState("");

  const countryCodes = t.raw("RequestDemoModal.countryCodes");
  const jobTitles = t.raw("RequestDemoModal.jobTitles");
  const industrySectors = t.raw("RequestDemoModal.industrySectors");
  const solutions = t.raw("RequestDemoModal.solutions");

  const handlePhoneCodeChange = (value: string) => {
    setSelectedPhoneCode(value);
    setValue("phoneCode", value);
  };

  const handleJobTitleChange = (value: string) => {
    setSelectedJobTitle(value);
    setValue("jobTitle", value);
  };

  const handleIndustrySectorChange = (value: string) => {
    setSelectedIndustrySector(value);
    setValue("industrySector", value);
  };

  const handleSolutionChange = (value: string) => {
    setSelectedSolution(value);
    setValue("solution", value);
  };

  const onSubmit = (data: RequestDemoFormData) => {
    console.log("Form Data:", data);
    reset();
    setSelectedPhoneCode("+55");
    setSelectedJobTitle("");
    setSelectedIndustrySector("");
    setSelectedSolution("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl gap-4 max-h-screen overflow-y-auto bg-slate-50  px-6 py-8 md:px-16 lg:py-12 rounded-xs">
        <DialogHeader>
          <DialogTitle className="text-center md:text-2xl lg:text-3xl">
            {t("RequestDemoModal.title")}
          </DialogTitle>
          <DialogDescription className="text-sm lg:text-base text-center text-slate-500">
            {t("RequestDemoModal.description")}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-1">
            <Input
              id="name"
              placeholder={t("RequestDemoModal.fields.namePlaceholder")}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-destructive text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              id="workEmail"
              type="email"
              placeholder={t("RequestDemoModal.fields.workEmailPlaceholder")}
              {...register("workEmail")}
              className="w-full"
            />
            {errors.workEmail && (
              <p className="text-destructive text-sm">
                {errors.workEmail.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <InputGroup className="h-11 rounded-xs">
                <InputGroupAddon align="inline-start">
                  <CountryCodeSelect
                    value={selectedPhoneCode}
                    onValueChange={handlePhoneCodeChange}
                    countryCodes={countryCodes}
                  />
                  <span className="text-sm font-medium">
                    {selectedPhoneCode}
                  </span>
                </InputGroupAddon>
                <Input
                  {...register("phoneNumber")}
                  className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  data-slot="input-group-control"
                />
              </InputGroup>
              {(errors.phoneNumber || errors.phoneCode) && (
                <p className="text-destructive text-sm">
                  {errors.phoneNumber?.message || errors.phoneCode?.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Select
                value={selectedJobTitle}
                onValueChange={handleJobTitleChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={t(
                      "RequestDemoModal.fields.jobTitlePlaceholder",
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  {jobTitles?.map((title: string) => (
                    <SelectItem key={title} value={title}>
                      {title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.jobTitle && (
                <p className="text-destructive text-sm">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <Select
              value={selectedIndustrySector}
              onValueChange={handleIndustrySectorChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={t(
                    "RequestDemoModal.fields.industrySectorPlaceholder",
                  )}
                />
              </SelectTrigger>
              <SelectContent>
                {industrySectors?.map((sector: string) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.industrySector && (
              <p className="text-destructive text-sm">
                {errors.industrySector.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Select
              value={selectedSolution}
              onValueChange={handleSolutionChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={t("RequestDemoModal.fields.solutionPlaceholder")}
                />
              </SelectTrigger>
              <SelectContent>
                {solutions?.map((sol: string) => (
                  <SelectItem key={sol} value={sol}>
                    {sol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.solution && (
              <p className="text-destructive text-sm">
                {errors.solution.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="max-w-fit rounded-xs w-full transition ease-in-out duration-150 disabled:cursor-not-allowed text-center font-medium text-body-lg leading-5.5 lg:leading-6 px-6 py-3 bg-green-600 text-white hover:bg-green-900 active:bg-green-950 disabled:bg-slate-300 min-w-full"
          >
            {t("RequestDemoModal.submitButton")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
