"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
      .string()
      .min(1, t("RequestDemoModal.validationErrors.jobTitleRequired")),
    industrySector: z
      .string()
      .min(1, t("RequestDemoModal.validationErrors.industrySectorRequired")),
    solution: z
      .string()
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

  const [selectedPhoneCode, setSelectedPhoneCode] = React.useState("");
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
    const successMessage = `Form Data:\n\nName: ${data.name}\nEmail: ${data.workEmail}\nPhone: ${data.phoneCode} ${data.phoneNumber}\nJob Title: ${data.jobTitle}\nIndustry Sector: ${data.industrySector}\nSolution: ${data.solution}`;

    alert(successMessage);
    reset();
    setSelectedPhoneCode("");
    setSelectedJobTitle("");
    setSelectedIndustrySector("");
    setSelectedSolution("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl gap-4 max-h-screen overflow-y-auto">
        <DialogHeader className="gap-2 sticky top-0 bg-white">
          <DialogTitle className="text-2xl">
            {t("RequestDemoModal.title")}
          </DialogTitle>
          <DialogDescription className="text-sm">
            {t("RequestDemoModal.description")}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Name Field */}
          <div className="space-y-1">
            <Label htmlFor="name" className="text-sm font-medium">
              {t("RequestDemoModal.fields.name")}
            </Label>
            <Input
              id="name"
              placeholder={t("RequestDemoModal.fields.namePlaceholder")}
              {...register("name")}
              className="h-9 w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Work Email Field */}
          <div className="space-y-1">
            <Label htmlFor="workEmail" className="text-sm font-medium">
              {t("RequestDemoModal.fields.workEmail")}
            </Label>
            <Input
              id="workEmail"
              type="email"
              placeholder={t("RequestDemoModal.fields.workEmailPlaceholder")}
              {...register("workEmail")}
              className="h-9 w-full"
            />
            {errors.workEmail && (
              <p className="text-red-500 text-sm">{errors.workEmail.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Phone Number Field */}
            <div className="space-y-1">
              <Label className="text-sm font-medium">
                {t("RequestDemoModal.fields.phoneNumber")}
              </Label>
              <div className="flex gap-2">
                <Select
                  value={selectedPhoneCode}
                  onValueChange={handlePhoneCodeChange}
                >
                  <SelectTrigger className="w-24 h-9 shrink-0">
                    <SelectValue
                      placeholder={t(
                        "RequestDemoModal.fields.phoneCodePlaceholder",
                      )}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes?.map(
                      (item: { code: string; country: string }) => (
                        <SelectItem key={item.code} value={item.code}>
                          {item.code}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
                <Input
                  placeholder={t(
                    "RequestDemoModal.fields.phoneNumberPlaceholder",
                  )}
                  {...register("phoneNumber")}
                  className="flex-1 min-w-0 h-9"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Job Title Field */}
            <div className="space-y-1">
              <Label htmlFor="jobTitle" className="text-sm font-medium">
                {t("RequestDemoModal.fields.jobTitle")}
              </Label>
              <Select
                value={selectedJobTitle}
                onValueChange={handleJobTitleChange}
              >
                <SelectTrigger className="h-9 w-full">
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
                <p className="text-red-500 text-sm">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Industry Sector Field */}
            <div className="space-y-1">
              <Label htmlFor="industrySector" className="text-sm font-medium">
                {t("RequestDemoModal.fields.industrySector")}
              </Label>
              <Select
                value={selectedIndustrySector}
                onValueChange={handleIndustrySectorChange}
              >
                <SelectTrigger className="h-9 w-full">
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
                <p className="text-red-500 text-sm">
                  {errors.industrySector.message}
                </p>
              )}
            </div>

            {/* Solution Field */}
            <div className="space-y-1">
              <Label htmlFor="solution" className="text-sm font-medium">
                {t("RequestDemoModal.fields.solution")}
              </Label>
              <Select
                value={selectedSolution}
                onValueChange={handleSolutionChange}
              >
                <SelectTrigger className="h-9 w-full">
                  <SelectValue
                    placeholder={t(
                      "RequestDemoModal.fields.solutionPlaceholder",
                    )}
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
                <p className="text-red-500 text-sm">
                  {errors.solution.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-9 bg-green-600 hover:bg-green-700 text-white font-semibold mt-2"
          >
            {t("RequestDemoModal.submitButton")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
