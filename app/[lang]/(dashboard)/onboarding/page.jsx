import Card from "@/components/ui/card-snippet";
import ValidationWizard from "./validation-wizard";


const FormLayout = () => {
  return (
    <div className="space-y-4 mt-8">
      
      <Card title="Child's Profile Setup">
        <ValidationWizard />
      </Card>
      
    </div>
  );
};

export default FormLayout;
