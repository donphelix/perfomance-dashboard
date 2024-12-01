import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    VStack,
    Button,
} from "@chakra-ui/react";
import Link from "next/link";
import {CloseButton} from "@/components/ui/close-button";

const Navbar = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Box bg="blue.500" px={4} color="white">
            <Flex h={16} alignItems="center" justifyContent="space-between">
                {/* Logo */}
                <Box fontWeight="bold" fontSize="xl">
                    <Link href="/dashboard">
                        <Button variant="link" color="white">
                            Dashboard
                        </Button>
                    </Link>
                </Box>

                {/* Desktop Links */}
                <HStack spacing={8} alignItems="center" display={{base: "none", md: "flex"}}>
                    <Link href="/dashboard">
                        <Button variant="link" color="white">
                            Overview
                        </Button>
                    </Link>
                    <Link href="/kpi">
                        <Button variant="link" color="white">
                            KPI
                        </Button>
                    </Link>
                    {/*<Link href="/charts">*/}
                    {/*    <Button variant="link" color="white">*/}
                    {/*        Charts*/}
                    {/*    </Button>*/}
                    {/*</Link>*/}
                    {/*<Link href="/transactions">*/}
                    {/*    <Button variant="link" color="white">*/}
                    {/*        Transactions*/}
                    {/*    </Button>*/}
                    {/*</Link>*/}
                </HStack>

                {/* Mobile Menu Button */}
                <IconButton
                    size="md"
                    icon={<IconButton/>}
                    aria-label="Open Menu"
                    display={{md: "none"}}
                    onClick={onOpen}
                />
            </Flex>

            {/* Mobile Menu */}
            {isOpen ? (
                <Box pb={4} display={{md: "none"}}>
                    <VStack as="nav" spacing={4} alignItems="start">
                        <CloseButton onClick={onClose}/>
                        <Link href="/dashboard" passHref>
                            <Button variant="link" onClick={onClose}>
                                Overview
                            </Button>
                        </Link>
                        <Link href="/charts" passHref>
                            <Button variant="link" onClick={onClose}>
                                Charts
                            </Button>
                        </Link>
                        <Link href="/transactions" passHref>
                            <Button variant="link" onClick={onClose}>
                                Transactions
                            </Button>
                        </Link>
                    </VStack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;
