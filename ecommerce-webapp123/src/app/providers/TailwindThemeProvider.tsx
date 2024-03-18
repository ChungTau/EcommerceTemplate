import { ThemeProvider } from 'next-themes'

export function TailwindThemeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
}