'use client';

import {
    Button,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';

export default function Greeter() {
    let [oldVisitor, setOldVisitor] = useState(true);

    useEffect(() => {
        if (!localStorage.getItem('oldVisitor')) {
            setOldVisitor(false);
        }
    }, []);

    function setLocalOldVisitor() {
        setOldVisitor(true);
        localStorage.setItem('oldVisitor', 'true');
    }

    const { isOpen, onOpenChange } = useDisclosure({
        isOpen: !oldVisitor,
        onClose: setLocalOldVisitor,
    });

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="text-2xl font-bold">
                            Welcome to Testgen!
                        </ModalHeader>
                        <ModalBody>
                            <p>
                                Testgen is a simple tool that you can use
                                to generate tests about anything easily.
                            </p>
                            <p>
                                To use Testgen, you will need an API key
                                from an LLM provider. For example, you can use{' '}
                                <Link isExternal href="https://openai.com/api/">
                                    OpenAI API
                                </Link>
                                . Choose the model provider you prefer and enter
                                your API key first. Your API key will not be
                                sent to our servers (requests are done from your
                                browser). You may want to see the{' '}
                                <Link
                                    isExternal
                                    href="https://github.com/cosmicproc/testgen/tree/main/examples"
                                >
                                    examples
                                </Link>{' '}
                                before you start.
                            </p>
                            <h3 className="text-large font-bold">Warning!</h3>
                            <p>
                                There is no guarantee that anything generated by{' '}
                                Testgen is going to be correct, accurate,
                                or appropriate. Use it at your own risk.
                                Language models can make mistakes.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onPress={onClose} color="danger">
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
