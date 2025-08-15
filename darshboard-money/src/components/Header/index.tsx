import { HeaderConteiner, HeaderContent, Icon, NewTransactionButton } from "./styles";
import { CircleAlertIcon } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return(
        <HeaderConteiner>
            <HeaderContent>
                <Icon>
                    <CircleAlertIcon color="#00b37e" height={25} width={27}/>
                    <strong> DT MONEY</strong>
                </Icon>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
                
            </HeaderContent>
        </HeaderConteiner>
    )
}