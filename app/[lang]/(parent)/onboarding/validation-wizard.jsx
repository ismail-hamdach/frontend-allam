"use client";
import React from "react";
import { Stepper, Step, StepLabel } from "@/components/ui/steps";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
const ValidationWizard = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "Child’s Basic Details",
      content: "Set up your Child’s Basic Details",
    },
    {
      label: "Personalized Learning Preferences",
      content: "Add your Personalized Learning Preferences",
    },
    {
      label: "Learning Goals & Environment",
      content: "Set your Learning Goals & Environment",
    },
  ];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = () => {
    toast({
      title: "You submitted the following values:",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 top-0 right-0">
          <p className="text-primary-foreground">Done</p>
        </div>
      ),
    });
  };

  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div className="mt-4">
      <Stepper
        current={activeStep}
        content="right"
        direction={isTablet && "vertical"}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <StepLabel variant="caption">Optional</StepLabel>
            );
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                <div className="flex flex-col">
                  <span> {label.label}</span>
                  <span> {label.content}</span>
                </div>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <div className="mt-2 mb-2 font-semibold text-center">
            All steps completed - you&apos;re finished
          </div>
          <div className="flex pt-2">
            <div className=" flex-1" />
            <Button
              size="xs"
              variant="outline"
              color="destructive"
              className="cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <form>
            <div className="grid grid-cols-12 gap-4">
              {activeStep === 0 && (
                <>
                  <div className="col-span-12 mb-4 mt-6">
                    <h4 className="text-sm font-medium text-default-600">
                      {steps[activeStep]?.label}
                    </h4>
                    <p className="text-xs text-default-600 mt-1">
                      {steps[activeStep]?.content}

                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="Child's Name" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="number" placeholder="Age" />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-12 lg:col-span-6">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Language Proficiency Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                </>
              )}
              {activeStep === 1 && (
                <>
                  <div className="col-span-12 mt-6 mb-4">
                    <h4 className="text-sm font-medium text-default-600">
                      {steps[activeStep]?.label}
                    </h4>
                    <p className="text-xs text-default-600 mt-1">
                      {steps[activeStep]?.content}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Preferred Learning Style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="visual">Visual</SelectItem>
                        <SelectItem value="auditory">Auditory</SelectItem>
                        <SelectItem value="reading/Writing">Reading/Writing</SelectItem>
                        <SelectItem value="kinesthetic">Kinesthetic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Input type="text" placeholder="Interests and Hobbies" />
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Learning Pace" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="slow">Slow</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="fast">Fast</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-12 lg:col-span-8">

                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Attention Span" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="long">Long</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>


                </>
              )}
              {activeStep === 2 && (
                <>
                  <div className="col-span-12 mt-6 mb-4">
                    <h4 className="text-sm font-medium text-default-600">
                      {steps[activeStep]?.label}
                    </h4>
                    <p className="text-xs text-default-600 mt-1">
                      {steps[activeStep]?.content}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What would you like your child to focus on?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="expand-vocabulary">Expand Vocabulary</SelectItem>
                        <SelectItem value="improve-grammar">Improve Grammar</SelectItem>
                        <SelectItem value="develop-reading-skills">Develop Reading Skills</SelectItem>
                        <SelectItem value="enhance-writing-skills">Enhance Writing Skills</SelectItem>
                        <SelectItem value="improve-listening-comprehension">Improve Listening & Comprehension</SelectItem>
                        <SelectItem value="all-of-the-above">All of the above</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What is your child’s current reading and writing ability?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cannot-read-write">Cannot read or write yet</SelectItem>
                        <SelectItem value="can-recognize-letters">Can recognize letters</SelectItem>
                        <SelectItem value="can-read-write-simple-words">Can read/write simple words</SelectItem>
                        <SelectItem value="can-read-write-short-sentences">Can read/write short sentences</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-12 lg:col-span-12">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When does your child prefer to learn?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                        <SelectItem value="no-preference">No preference</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </div>
          </form>

          <div className="flex pt-2 ">
            <Button
              size="xs"
              variant="outline"
              color="secondary"
              className={cn("cursor-pointer", {
                hidden: activeStep === 0,
              })}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <div className="flex-1	gap-4 " />
            <div className="flex	gap-2 ">
              {activeStep === steps.length - 1 ? (
                <Button
                  size="xs"
                  variant="outline"
                  color="success"
                  className="cursor-pointer"
                  onClick={() => {
                    if (onSubmit) onSubmit();
                    handleNext();
                  }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  size="xs"
                  variant="outline"
                  color="secondary"
                  className="cursor-pointer"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ValidationWizard;
