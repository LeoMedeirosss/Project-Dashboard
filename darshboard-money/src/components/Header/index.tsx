import { HeaderConteiner, HeaderContent, Icon, NewTransactionButton } from "./styles";
import { CircleAlertIcon } from "lucide-react"
export function Header() {
    return(
        <HeaderConteiner>
            <HeaderContent>
                <Icon>
                    <CircleAlertIcon color="#00b37e" height={25} width={27}/>
                    <strong> DT MONEY</strong>
                </Icon>

                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderConteiner>
    )
}