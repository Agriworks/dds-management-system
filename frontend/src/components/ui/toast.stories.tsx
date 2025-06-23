import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';
import { Toast } from './toast';
import { useToast } from '../../hooks/use-toast';
import { withToastProvider } from './toastStorybookProvider';

const meta: Meta = {
    title: 'UI/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [withToastProvider],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    render: () => <ToastDemo />,
};

const ToastDemo = () => {
    const { toast } = useToast();

    return (
        <div className="flex flex-col items-center gap-4">
            <Button
                onClick={() => {
                    toast({
                        title: "Success!",
                        description: "Your action was completed successfully.",
                        variant: "default",
                    });
                }}
            >
                Show Success Toast
            </Button>

            <Button
                onClick={() => {
                    toast({
                        title: "Error!",
                        description: "Something went wrong. Please try again.",
                        variant: "destructive",
                    });
                }}
                variant="destructive"
            >
                Show Error Toast
            </Button>

            <Button
                onClick={() => {
                    toast({
                        title: "Information",
                        description: "This is an informational message.",
                        variant: "default",
                    });
                }}
                variant="outline"
            >
                Show Info Toast
            </Button>
        </div>
    );
};