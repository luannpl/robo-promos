"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Users,
  Activity,
  Network,
  Trash2,
  Settings,
  Menu,
  X,
} from "lucide-react"

interface Margem {
  id: string
  nome: string
  status: "ativa" | "inativa"
  ultimaAtualizacao: string
  sessoesAtivas: number
  dependentes: number
}

export default function PainelAfiliados() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [modalNovaMargemAberto, setModalNovaMargemAberto] = useState(false)
  const [novaMargemForm, setNovaMargemForm] = useState({
    nome: "",
    numeroSessoes: "1",
    prefixoGrupos: "",
    grupoEnvio: "",
  })
  const [margens] = useState<Margem[]>([
    {
      id: "1",
      nome: "Hiper Geral Margem 1",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
    {
      id: "2",
      nome: "Hyper Fit Margem 1.1",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
    {
      id: "3",
      nome: "Hyper Fit Margem 1.2",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
    {
      id: "4",
      nome: "Hyper Fit Margem 1.3",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
    {
      id: "5",
      nome: "Hyper Fit Margem 1.4",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
    {
      id: "6",
      nome: "Hyper Fit Margem 1.5",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
  ])

  const totalMargens = 11
  const totalSessoes = 11
  const sessoesConectadas = 6
  const sessoesDesconectadas = 5

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="border-b border-border/10 bg-background py-4">
        <div className="w-full px-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">Painel de Afiliados Whatsapp</h1>
              <p className="text-sm text-gray-400 mt-1">Gerencie suas sessões e margens WhatsApp</p>
            </div>

            {/* Desktop - Botões visíveis */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                size="sm" 
                className="bg-white text-black hover:bg-gray-200 font-medium whitespace-nowrap"
                onClick={() => setModalNovaMargemAberto(true)}
              >
                + Nova Margem
              </Button>
            </div>

            {/* Mobile - Botão Hambúrguer */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setMenuAberto(!menuAberto)}
            >
              {menuAberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {menuAberto && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMenuAberto(false)}
            />
            
            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-64 bg-[#0a0a0a] border-l border-gray-800 z-50 md:hidden shadow-2xl animate-slide-in">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-white">Menu</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMenuAberto(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <Button
                  className="w-full justify-start bg-white text-black hover:bg-gray-200 font-medium"
                  onClick={() => {
                    setMenuAberto(false)
                    setModalNovaMargemAberto(true)
                  }}
                >
                  + Nova Margem
                </Button>
              </div>
            </div>
          </>
        )}
      </header>

      <div className="w-full px-4 md:px-6 py-6 md:py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <Button variant="secondary" className="bg-white text-black hover:bg-gray-200 gap-2 rounded-md whitespace-nowrap">
            <Users className="h-4 w-4" />
            Painel do WhatsApp
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-[#111111] border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-gray-400">Total de Margens</span>
                <Users className="h-5 w-5 text-gray-500" />
              </div>
              <p className="text-3xl font-bold text-white">{totalMargens}</p>
            </CardContent>
          </Card>

          <Card className="bg-[#111111] border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-gray-400">Total de Sessões</span>
                <div className="h-5 w-5 border-2 border-gray-600 rounded-sm" />
              </div>
              <p className="text-3xl font-bold text-white">{totalSessoes}</p>
            </CardContent>
          </Card>

          <Card className="bg-[#111111] border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-gray-400">Sessões Conectadas</span>
                <Network className="h-5 w-5 text-gray-500" />
              </div>
              <p className="text-3xl font-bold text-green-500">{sessoesConectadas}</p>
            </CardContent>
          </Card>

          <Card className="bg-[#111111] border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-gray-400">Sessões Desconectadas</span>
                <Network className="h-5 w-5 text-gray-500 opacity-50" />
              </div>
              <p className="text-3xl font-bold text-red-500">{sessoesDesconectadas}</p>
            </CardContent>
          </Card>
        </div>

        {/* Connection Status */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="text-sm text-gray-400">Conectado à API</span>
          </div>
          <span className="text-sm text-gray-500">|</span>
          <span className="text-sm text-gray-400">Atualização automática: 3s</span>
        </div>

        {/* Margins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {margens.map((margem) => (
            <Card key={margem.id} className="bg-[#111111] border-none shadow-lg relative group">
              <CardContent className="p-5">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gray-500" />
                    <h3 className="text-sm font-medium text-white truncate flex-1">{margem.nome}</h3>
                    <span className="text-xs text-green-500/50 font-mono">1/1</span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border border-gray-600 rounded-sm" />
                      <span className="text-xs text-gray-400">1ª sessão</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-xs text-green-500">Ativo</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="h-3 w-3 border border-gray-600 rounded-sm" />
                      <span>HIPER GERAL -</span>
                    </div>
                    <div className="pl-5 text-xs text-gray-500">
                      UPdesconto Fitness - 11
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 h-9"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Expandir
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="h-9 w-9 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal Nova Margem */}
      <Dialog open={modalNovaMargemAberto} onOpenChange={setModalNovaMargemAberto}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Criar Nova Margem</DialogTitle>
            <DialogDescription>
              Crie um novo grupo de sessões WhatsApp com configurações independentes.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Nome da Margem */}
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm font-medium text-gray-300">
                Nome da Margem
              </label>
              <Input
                id="nome"
                placeholder="Ex: Margem Fitness"
                value={novaMargemForm.nome}
                onChange={(e) =>
                  setNovaMargemForm({ ...novaMargemForm, nome: e.target.value })
                }
                className="bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600"
              />
            </div>

            {/* Número de Sessões */}
            <div className="space-y-2">
              <label htmlFor="sessoes" className="text-sm font-medium text-gray-300">
                Número de Sessões (1-10)
              </label>
              <Input
                id="sessoes"
                type="number"
                min="1"
                max="10"
                placeholder="1"
                value={novaMargemForm.numeroSessoes}
                onChange={(e) =>
                  setNovaMargemForm({ ...novaMargemForm, numeroSessoes: e.target.value })
                }
                className="bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600"
              />
            </div>

            {/* Prefixo dos Grupos */}
            <div className="space-y-2">
              <label htmlFor="prefixo" className="text-sm font-medium text-gray-300">
                Prefixo dos Grupos
              </label>
              <Input
                id="prefixo"
                placeholder="Ex: Minha Nova Margem -"
                value={novaMargemForm.prefixoGrupos}
                onChange={(e) =>
                  setNovaMargemForm({ ...novaMargemForm, prefixoGrupos: e.target.value })
                }
                className="bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600"
              />
              <p className="text-xs text-gray-500">
                Prefixo usado para identificar os grupos de destino
              </p>
            </div>

            {/* Grupo de Envio */}
            <div className="space-y-2">
              <label htmlFor="grupoEnvio" className="text-sm font-medium text-gray-300">
                Grupo de Envio
              </label>
              <Input
                id="grupoEnvio"
                placeholder="Ex: Grupo de Envio Novo"
                value={novaMargemForm.grupoEnvio}
                onChange={(e) =>
                  setNovaMargemForm({ ...novaMargemForm, grupoEnvio: e.target.value })
                }
                className="bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600"
              />
              <p className="text-xs text-gray-500">
                Nome do grupo que será monitorado para disparar envios
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setModalNovaMargemAberto(false)}
              className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
                // Aqui você pode adicionar a lógica para criar a margem
                console.log("Nova Margem:", novaMargemForm)
                setModalNovaMargemAberto(false)
                // Resetar formulário
                setNovaMargemForm({
                  nome: "",
                  numeroSessoes: "1",
                  prefixoGrupos: "",
                  grupoEnvio: "",
                })
              }}
              className="bg-white text-black hover:bg-gray-200"
            >
              Criar Margem
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
